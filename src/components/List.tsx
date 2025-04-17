import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Image,
} from "@heroui/react";

interface IList {
  data: Record<string, any>[];
}

export const List = ({ data = [] }: IList) => {
  console.log(data);
  return (
    <>
      <div className="mt-10 flex justify-center gap-4 flex-wrap">
        {data?.map(({ id, name, picture, likes }) => (
          <Card key={id} className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <small className="text-default-500">Likes {likes}</small>
              <h4 className="font-bold text-large">{name}</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src={picture}
                width={270}
              />
            </CardBody>
          </Card>
        ))}
      </div>
    </>
  );
};
