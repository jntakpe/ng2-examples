export enum Days {Monday, Tuesday, Wednesday, Saturday, Sunday}

function someFct(day: Days) {
    console.log(day);
}

someFct(Days.Tuesday);