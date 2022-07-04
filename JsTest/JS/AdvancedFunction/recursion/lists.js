/*
 * @Author: YiFreerFiY
 * @Date: 2022-05-17 15:32:36
 * @Description:
 *
 */
let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

let examList = { value: 1 };
examList.next = { value: 2 };
examList.next.next = { value: 3 };
examList.next.next.next = { value: 4 };
examList.next.next.next.next = null;

let secList = list.next.next;
list.next.next = null;


list.next.next = secList;

list = {
    value: 'new item',
    next: list
};