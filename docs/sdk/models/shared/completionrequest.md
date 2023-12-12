# CompletionRequest


## Fields

| Field              | Type               | Required           | Description        | Example            |
| ------------------ | ------------------ | ------------------ | ------------------ | ------------------ |
| `bestOf`           | *number*           | :heavy_minus_sign: | N/A                | 1                  |
| `frequencyPenalty` | *number*           | :heavy_minus_sign: | N/A                |                    |
| `logprobs`         | *number*           | :heavy_minus_sign: | N/A                |                    |
| `maxTokens`        | *number*           | :heavy_minus_sign: | N/A                | 1024               |
| `minTokens`        | *number*           | :heavy_minus_sign: | N/A                | 1                  |
| `n`                | *number*           | :heavy_minus_sign: | N/A                |                    |
| `presencePenalty`  | *number*           | :heavy_minus_sign: | N/A                |                    |
| `prompt`           | *string*           | :heavy_check_mark: | N/A                |                    |
| `stop`             | *string*[]         | :heavy_minus_sign: | N/A                | ["the","is","and"] |
| `temperature`      | *number*           | :heavy_minus_sign: | N/A                | 0.7                |
| `topP`             | *number*           | :heavy_minus_sign: | N/A                | 1                  |