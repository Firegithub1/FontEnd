let name = ['Alice','zhangsan',"lisa",'meihua','zhangsan'];

let nameNum = name.reduce((pre,cur)=>{
    if (cur in pre) {
        pre[cur]++;
    }else{
        pre[cur] =1;
    }
    return pre;
},{});

console.table(nameNum);