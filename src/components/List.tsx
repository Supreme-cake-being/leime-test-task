import { Card, CardBody, CardHeader, Image, Link } from "@heroui/react";

interface IList {
  data: Record<string, string | number>[];
}

export const List = ({ data = [] }: IList) => {
  return (
    <>
      <div className="mt-10 flex justify-center gap-4 flex-wrap">
        {data?.map(({ id, name, picture, likes }) => (
          <Card key={id} className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <small className="text-default-500">Likes {likes}</small>
              <h4 className="font-bold text-large">{name}</h4>
              <Link href={picture as string} target="_blank">
                Link
              </Link>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src={picture as string}
                width={270}
              />
            </CardBody>
          </Card>
        ))}
      </div>
    </>
  );
};
