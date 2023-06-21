<template>
    <div class="container mt-5">
        <div class="card">
            <div class="card-header">
                <h4>Delete Student</h4>
            </div>
            <div class="card-body">
                <div class="mb-3">
                    <label for="">Name</label>
                    <input type="text" v-model="model.student.name" :readonly="isReadOnly" class="form-control" />
                </div>
                <div class="mb-3">
                    <label for="">Email</label>
                    <input type="text" v-model="model.student.email" :readonly="isReadOnly" class="form-control" />
                </div>
                <div class="mb-3">
                    <label for="">Phone</label>
                    <input type="text" v-model="model.student.phone" :readonly="isReadOnly" class="form-control" />
                </div>
                <div class="mb-3">
                    <button type="button" @click="saveStudent" class="btn btn-danger">Delete</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'studentEdit',
    data(){
        return {
            studentId: '',
            model: {
                student: {
                    name: '',
                    email: '',
                    phone: '',
                }
            },
            isReadOnly: true
        }
    },
    mounted(){
        //console.log(this.$route.params.id)
        this.studentId = this.$route.params.id;
        this.getStudentData(this.$route.params.id);
    },
    methods: {

        getStudentData(studentId){
            axios.get(`http://laravelproject.test/api/student/${studentId}/edit`)
                .then(res => {
                    // this.model.student.name = res.data.student.name;
                    // this.model.student.email = res.data.student.email;
                    // this.model.student.phone = res.data.student.phone;
                    this.model.student = res.data.student;
            });
        },
        saveStudent(){
            axios.post(`http://laravelproject.test/api/student-delete/${this.studentId}`, this.model.student)
                .then(res => {
                    console.log(res)
                    alert(res.data.message);

                    this.model.student = {
                        name: '',
                        email:'',
                        phone:''
                    }

                    window.location.href = 'http://localhost:5173/student';
                })
                .catch(function (error) {
                    if (error.response) {
           
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                    } else if (error.request) {

                    console.log(error.request);
                    }
                    else {
                    
                    console.log('Error', error.message);
                    }

                })
        }
    }
}
</script>