import { Message } from "element-ui";
export const message = (type,msg) => {
return  Message({
    type,
    message:msg
    })
}

