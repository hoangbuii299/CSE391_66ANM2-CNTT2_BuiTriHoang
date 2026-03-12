function generateFakeStudents(){

const ho = ["Nguyễn","Trần","Đào","Phạm","Vũ","Võ","Đặng","Lê","Đỗ"]
const dem = ["Tiến","Thị","Minh","Gia","Quốc","Thanh","Văn","Trung","Anh"]
const ten = ["Anh","Bình","Cường","Dũng","Lan","Trang","Phúc","Nam","Đức"]

let students = []

for(let i=0;i<50;i++){

let hoTen =
ho[Math.floor(Math.random()*ho.length)]
+" "+
dem[Math.floor(Math.random()*dem.length)]
+" "+
ten[Math.floor(Math.random()*ten.length)]

let diem = +(Math.random()*10).toFixed(1)

students.push({
hoTen: hoTen,
diem: diem
})

}

return students

}