import { Request, Response } from 'express';
import { getObjects } from '../../services/aws/s3';
import { listImages } from '../../utils/aws/s3/list';

export const getPhotos = async (_req: Request, res: Response) => {
  try {
    const object = await getObjects();

    const contents = object.Contents;

    const images = listImages(contents);

    return res.status(200).send(images);
  } catch (errors: any) {
    return res.status(500).send({
      errors,
    });
  }
};
