# ListFilesResponse


## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `contentType`                                                          | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `failResponse`                                                         | [shared.FailResponse](../../models/shared/failresponse.md)             | :heavy_minus_sign:                                                     | Bad Request                                                            |
| `headers`                                                              | Record<string, *string*[]>                                             | :heavy_minus_sign:                                                     | N/A                                                                    |
| `modelFilesResponse`                                                   | [shared.ModelFilesResponse](../../models/shared/modelfilesresponse.md) | :heavy_minus_sign:                                                     | N/A                                                                    |
| `statusCode`                                                           | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `rawResponse`                                                          | [AxiosResponse>](https://axios-http.com/docs/res_schema)               | :heavy_minus_sign:                                                     | N/A                                                                    |