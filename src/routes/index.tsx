import { createFileRoute } from '@tanstack/react-router';
import { queryOptions, useSuspenseQuery } from '@tanstack/react-query';

const CURRENCIES = ['usd', 'eur'] as const;
const CRYPTO_LIST = ['bitcoin', 'ethereum', 'ripple', 'binancecoin', 'solana'] as const;

type CryptoApiResult = {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  price_change_percentage_24h: number;
};

const query = queryOptions({
  queryKey: ['crypto', { list: CRYPTO_LIST, currency: CURRENCIES }],
  queryFn: async () => {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${CRYPTO_LIST.join(',')}`
    );
    const result = await response.json();

    return result as CryptoApiResult[];
  },
});

function getCurrencyDisplay(value: number): string {
  if (value > 10 ** 12) {
    const result = (value / 10 ** 12).toFixed(2);
    return `$ ${result}T`;
  }

  if (value > 10 ** 9) {
    const result = (value / 10 ** 9).toFixed(2);
    return `$ ${result}B`;
  }

  if (value > 10 ** 6) {
    const result = (value / 10 ** 6).toFixed(2);
    return `$ ${result}M`;
  }

  return `$ ${value.toLocaleString()}`;
}

function getPriceChangeDisplay(change: number): string {
  const isPositive = change >= 0;
  const formattedChange = Math.abs(change).toFixed(2);
  return `${isPositive ? '+' : ''}${formattedChange}%`;
}

function getPriceChangeClass(change: number): string {
  return change >= 0 ? 'text-muted-foreground' : 'text-destructive';
}

export const Route = createFileRoute('/')({
  component: Index,
  loader: async ({ context: { queryClient } }) => {
    await queryClient.ensureQueryData(query);
  },
});

function Index() {
  const { data: cryptoData } = useSuspenseQuery(query);

  return (
    <div className="h-full space-y-6 py-2 md:py-10">
      <h3>Welcome Home!</h3>
      <div className="grid grid-cols-5 gap-4">
        {cryptoData.length &&
          cryptoData.map((coin) => (
            <article key={coin.id} className="card">
              <div className="flex items-center mb-4">
                <img
                  src={coin.image}
                  alt={`${coin.name} logo`}
                  className="w-12 h-12 mr-4 rounded-full object-contain"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="text-lg font-semibold  truncate">{coin.name}</h4>
                  <span className="text-sm font-medium text-muted-foreground uppercase">{coin.symbol}</span>
                </div>
              </div>
              <div className="mb-4">
                <div className="text-sm text-muted-foreground">Current Price</div>
                <div>
                  ${coin.current_price.toLocaleString()}{' '}
                  <span className={`${getPriceChangeClass(coin.price_change_percentage_24h)}`}>
                    {getPriceChangeDisplay(coin.price_change_percentage_24h)}
                  </span>
                </div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Market Cap</div>
                <span>
                  {getCurrencyDisplay(coin.market_cap)} (#{coin.market_cap_rank})
                </span>
              </div>
            </article>
          ))}
      </div>
    </div>
  );
}
