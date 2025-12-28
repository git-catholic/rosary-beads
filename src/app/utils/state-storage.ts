export abstract class StateStorageBase<T> {

  readonly key: string;

  abstract get data(): T;

  abstract set data(value: T);

  constructor(key: string) {
    this.key = key;
  }

}

export class StringStorage extends StateStorageBase<string> {

  constructor(key: string) {
    super(key);
  }

  get data(): string {
    const response = window.localStorage.getItem(this.key);
    return (response !== null) ? response : undefined;
  }

  set data(value: string) {
    if (value) {
      window.localStorage.setItem(this.key, value);
    }
    else {
      window.localStorage.removeItem(this.key);
    }
  }

}

export class FlagStorage extends StateStorageBase<boolean> {

  constructor(key: string) {
    super(key);
  }

  get data(): boolean {
    const response = window.localStorage.getItem(this.key);
    return this.stringToBoolean(response);
  }

  set data(value: boolean) {
    if (value) {
      window.localStorage.setItem(this.key, value.toString());
    }
    else {
      window.localStorage.removeItem(this.key);
    }
  }

  private stringToBoolean(value: string | null | undefined): boolean {
    return (value === null || value === undefined)
      ? false
      : value.toLowerCase() === 'true';
  }

}

class StateStorage<T> extends StateStorageBase<T> {

  constructor(key: string) {
    super(key);
  }

  get data(): T {
    let rawData = window.localStorage.getItem(this.key);

    try {
      if (rawData) {
        return JSON.parse(rawData) as T;
      }
    }
    catch (error) {
      // No action by design
    }

    return undefined;
  }

  set data(entry: T) {
    if (entry) {
      window.localStorage.setItem(this.key, JSON.stringify(entry));
    }
    else {
      window.localStorage.removeItem(this.key);
    }
  }

}
