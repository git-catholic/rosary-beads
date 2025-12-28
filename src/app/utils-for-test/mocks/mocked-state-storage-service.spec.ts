
export class MockedStorage implements Storage {

  private store = {} as Storage;

  getItem(key: string) {
    return this.store[key];
  }

  setItem(key: string, value: string) {
    this.store[key] = value;
  }

  removeItem(key: string) {
    delete this.store[key];
  }

  clear() {
    this.store = {} as Storage;
  }

  [name: string]: any;

  get length(): number {
    return this.store.length;
  }

  key(index: number): string | null {
    return this.store.key(index);
  }

}

describe('MockedStorage', () => {

  beforeEach(() => {
    Object.defineProperty(window, "localStorage", {
      value: new MockedStorage()
    });
  })

  it('Testing mocked storage', () => {
    // given
    const key = 'my-key';
    const value1 = 'value1';
    const mockedStorage = window.localStorage;

    // when #1
    mockedStorage.setItem(key, value1);

    // then #1
    expect(mockedStorage.getItem(key)).toEqual(value1);

    // when #2
    mockedStorage.clear();

    // then #2
    expect(mockedStorage.getItem(key)).toBeUndefined();
  })

})
