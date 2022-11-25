export function ReadOnly(value: boolean) {
  return function (obj: Object, propertyName: string, descriptor: PropertyDescriptor) {
    descriptor.writable = !value;
  };
}