<template>
    <br>
<div class="container mt-10">
   <div class="card">
    <div class="card-header">
        <h4>
            Student
            <RouterLink to="/student/create" class="btn btn-primary float-end">
                Add Student
            </RouterLink>
        </h4>
    </div>
    <div class="card-body">
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Created At</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody v-if="this.student.length > 0">
                <tr v-for="(student, index) in this.student" :key="index">
                    <td>{{ student.id }}</td>
                    <td>{{ student.name }}</td>
                    <td>{{ student.email }}</td>
                    <td>{{ student.phone }}</td>
                    <td>{{ student.created_at }}</td>
                    <td>
                        <RouterLink :to="{ path: '/student/'+student.id+'/edit'}" class="btn btn-success float-end">
                            Edit
                        </RouterLink>
                        <RouterLink :to="{ path: '/student/'+student.id+'/delete'}" class="btn btn-danger float-end">
                            Delete
                        </RouterLink>
                        <!-- <button title="button" class="btn btn-danger float-end">Delete</button> -->

                    </td>
                </tr>
            </tbody>
            <tbody v-else>
                <tr>
                    <td colspan="7">Loading...</td>
                </tr>
            </tbody>

        </table>
    </div>
   </div>
</div>
  </template>
<script> 
import axios from 'axios'
import { RouterLink } from 'vue-router';

export default {
    name: "student",
    data() {
        return {
            student: []
        };
    },
    mounted() {
        //  console.log('this is console log');
        this.getStudents();
    },
    methods: {
        getStudents() {
            axios.get("http://laravelproject.test/api/student-list")
                .then(response => {
                this.student = response.data.student;
                console.log(this.student);
            });
        }
    },
    components: { RouterLink }
}
</script>
  