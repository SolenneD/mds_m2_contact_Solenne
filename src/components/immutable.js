class MyImmutable {
  constructor() {
    this.immObject = null;
  }

  fromJS(immObject) {
    if (Object.keys(immObject).length > 0) {
      const res = [];
      for (let i = 0; i < Object.keys(immObject).length; i += 1) {
        res.push(Object.keys(immObject)[i]);
      }
      this.immObject = res;
    } else {
      this.immObject = immObject;
    }
    return this;
  }

  toJS() {
    return this.immObject;
  }

  setIn(contacts) {
    const update = this.obj;
    update[this.obj.findIndex(
      (contact) => contacts.id === contact.id
    )] = contacts;
    this.obj = update;
    return this;
  }
}

export default new MyImmutable();
