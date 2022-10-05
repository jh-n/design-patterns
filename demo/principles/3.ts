/**
 * 依赖倒转原则
 */

interface IReceiver {
  getInfo(): string;
}
class Email implements IReceiver {
  getInfo(): string {
    return "Email Info: 666";
  }
}
class WeChat implements IReceiver {
  getInfo(): string {
    return "WeChat Info: asd";
  }
}

class Person {
  receive(receiver: IReceiver) {
    console.log(receiver.getInfo());
  }
}

function main() {
  const person = new Person();
  const email = new Email();
  person.receive(email);

  const wechat = new WeChat();
  person.receive(wechat);
}
main();
