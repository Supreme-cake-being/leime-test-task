import { Card, CardHeader } from "@heroui/react";

export default function Home() {
  return (
    <div className="mt-10 flex justify-center">
      <Card className="max-w-[400px]">
        <CardHeader className="flex gap-3">
          <div className="flex flex-col">
            <p className="text-md">Please choose a page you want to visit</p>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
}
