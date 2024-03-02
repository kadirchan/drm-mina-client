import { Card, CardContent } from '@/components/ui/card';

export function GameCard({ index }: { index: number }) {
  return (
    <div className="p-1">
      <Card>
        <CardContent className="flex aspect-square items-center justify-center p-6">
          <span className="text-3xl font-semibold">{index + 1}</span>
        </CardContent>
      </Card>
    </div>
  );
}
