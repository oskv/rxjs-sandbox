const start$ = Rx.Observable.fromEvent(document.querySelector('#start'), 'click');
const half$ = Rx.Observable.fromEvent(document.querySelector('#half'), 'click');
const qauter$ = Rx.Observable.fromEvent(document.querySelector('#qauter'), 'click');
const stop$ = Rx.Observable.fromEvent(document.querySelector('#stop'), 'click');
const reset$ = Rx.Observable.fromEvent(document.querySelector('#reset'), 'click');
const interval$ = Rx.Observable.interval(1000);

const inc = (val) => val + 1;
const reset = () => 0;

const intervalThatStop$ = interval$.takeUntil(stop$);
const incOrReset$ = Rx.Observable.merge(
    intervalThatStop$.mapTo(inc),
    reset$.mapTo(reset));

start$
    .switchMapTo(incOrReset$)
    //.startWith(0)
    .scan((acc, curr) => {
        return curr(acc);
    }, 0)
    //.subscribe(console.log)

const starters$ = Rx.Observable.merge(start$.mapTo(1000), half$.mapTo(500), qauter$.mapTo(500))
starters$
    .switchMap((time) => Rx.Observable.merge(
        Rx.Observable.interval(time).takeUntil(stop$).mapTo(inc),
        reset$.mapTo(reset))
    )
    .scan((acc, curr) => {
        return curr(acc);
    }, 0)
    //.subscribe(console.log)

const input$ = Rx.Observable.fromEvent(document.querySelector('#input'), 'input').map(e => e.target.value);
const interval2$ = Rx.Observable.interval(1000);

Rx.Observable.combineLatest(input$.do(console.log), interval2$, (input, timer) => ({input, timer}))
    .takeWhile(data => data.timer < 3)
    //.filter(data => data.input == '2')
    .repeat()
    /*.subscribe(
        console.log,
        console.log,
        () => console.log('complete')
    );*/

input$
    .do(console.log)
    .takeWhile(text => text !== 'no')
    .withLatestFrom(interval2$, (input, timer) => ({input, timer}))
    //.filter(data => data.input == '2')
    //.repeat()
    .subscribe(
        console.log,
        console.log,
        () => console.log('complete')
    );