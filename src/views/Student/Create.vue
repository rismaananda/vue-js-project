<template>
    <div class="container mt-5">
        <div class="card">
            <div class="card-header">
                <h4>Add Student</h4>
            </div>
            <div class="card-body">
                <div class="mb-3">
                    <label for="">Name</label>
                    <input type="text" v-model="model.student.name" class="form-control" />
                </div>
                <div class="mb-3">
                    <label for="">Email</label>
                    <input type="text" v-model="model.student.email" class="form-control" />
                </div>
                <div class="mb-3">
                    <label for="">Phone</label>
                    <input type="text" v-model="model.student.phone" class="form-control" />
                </div>
                <div class="mb-3">
                    <button type="button" @click="saveStudent" class="btn btn-primary">Save</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'studentCreate',
    data(){
        return {
            model: {
                student: {
                    name: '',
                    email: '',
                    phone: '',
                }
            }
        }
    },
    methods: {

        saveStudent(){
            axios.post('http://laravelproject.test/api/student-create', this.model.student)
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