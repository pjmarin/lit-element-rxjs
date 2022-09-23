import { BehaviorSubject } from "rxjs";

export const Store = function() {
  const subject = new BehaviorSubject({ name: 'initial name' });
  const state$ = subject.asObservable();

  return {
      getStore: () => state$,
      setState: value => subject.next({ ...subject.value, ...value})
  }
}();