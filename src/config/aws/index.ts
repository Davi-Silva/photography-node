import AWS, { S3 } from 'aws-sdk';
import {
  AWS_ACCESS_KEY,
  AWS_REGION,
  AWS_S3_API_VERSION,
  AWS_SECRET_KEY,
} from '../../constrants/envs';

AWS.config.update({
  region: AWS_REGION,
  credentials: {
    accessKeyId: AWS_ACCESS_KEY,
    secretAccessKey: AWS_SECRET_KEY,
  },
});

export const s3 = new S3({ apiVersion: AWS_S3_API_VERSION });
