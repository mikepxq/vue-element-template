import { ElMessage } from "element-plus";
import type { Message, MessageParamsTyped } from "element-plus";
const messageFn = (type: keyof Message, options: MessageParamsTyped) => {
  if (typeof options === "object") options = { grouping: true, type, ...options };
  else options = { grouping: true, type, message: options };
  ElMessage(options);
};
export const appMessage: { [key in keyof Omit<Message, "closeAll">]: any } = {
  success: (options) => messageFn("success", options),
  warning: (options) => messageFn("warning", options),
  info: (options) => messageFn("info", options),
  error: (options) => messageFn("error", options),
};
