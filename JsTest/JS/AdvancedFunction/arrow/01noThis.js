let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList() {
        this.students.forEach(
            student => console.log(this.title + ":" + student)
        );
    }
};

console.log(group);

console.log("*************");
// group.showList02
let showList02 = () => {
    console.log("this.title");
};
group.showList02 = showList02;

console.log(group);
group.showList02();