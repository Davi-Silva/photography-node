import { s3 } from '../../../config/aws';
import { AWS_S3_BUCKET_NAME } from '../../../constrants/envs';

export const listBuckets = async () => {
  try {
    const list = await s3.listBuckets().promise();

    return list;
  } catch (error: any) {
    return error;
  }
};

export const getObjects = async () => {
  try {
    const list = await s3
      .listObjectsV2({ Bucket: AWS_S3_BUCKET_NAME })
      .promise();

    return list;
  } catch (error: any) {
    return error;
  }
};
