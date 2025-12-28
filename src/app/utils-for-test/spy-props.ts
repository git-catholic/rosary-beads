export function spyOnStringAppProperty(source: any, properyName: string): PropSpy<string> {
  return spyOnAppProperty(source, properyName, typeof '');
}

export function spyOnAppProperty<T>(source: any, properyName: string, type: T): PropSpy<T> {
  const root = Object.getOwnPropertyDescriptor(source, properyName);
  return {
    propGet: root?.get as jasmine.Spy<() => T>,
    propSet: root?.set as jasmine.Spy<() => T>
  } as PropSpy<T>;
}

export interface PropSpy<T> {
  propGet: jasmine.Spy<() => T>;
  propSet: jasmine.Spy<() => T>;
}