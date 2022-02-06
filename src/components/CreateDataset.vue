<template>
                <div>
                    <Menu></Menu>
                    <div class="row">
                        <div class="col-lg-2 col-md-2 col-xs-2"></div>
                        <div class="col-lg-4 col-md-4 col-xs-4 ContainerMenu">
                            <div class="Forma ">
                                <b-form method="POST" @submit.prevent="createDataset">
                                    <div class="form-group">
                                        <label class="labelForm" for="title">Title</label>
                                        <b-input
                                                class="inputForm"
                                                v-model="title"
                                                type="text"
                                                id="title"
                                                placeholder="Title.">
                                        </b-input>
                                    </div>
                                    <div class="form-group">
                                        <label class="labelForm" for="solutionTitle">solutionTitle</label>
                                        <b-input
                                                class="inputForm"
                                                v-model.trim="solutionTitle"
                                                type="text"
                                                id="solutionTitle"
                                                placeholder="solutionTitle">
                                        </b-input>
                                    </div>

                                    <div class="form-group">
                                        <label class="labelForm" for="type">type</label>
                                        <b-input
                                                class="inputForm"
                                                v-model="type"
                                                type="text"
                                                id="type"
                                                placeholder="type">
                                        </b-input>
                                    </div>

                                    <div class="form-group">
                                        <label class="labelForm" for="title">title</label>
                                        <b-input
                                                class="inputForm"
                                                v-model="title"
                                                type="text"
                                                id="title1"
                                                placeholder="title">
                                        </b-input>
                                    </div>

                                    <div class="form-group">
                                        <label class="labelForm" for="title">title</label>
                                        <b-input
                                                class="inputForm"
                                                v-model="title"
                                                type="text"
                                                id="title"
                                                placeholder="title">
                                        </b-input>
                                    </div>

                                    <div class="form-group">
                                        <label class="labelForm" for="title">title</label>
                                        <b-input
                                                class="inputForm"
                                                v-model="title"
                                                type="text"
                                                id="title"
                                                placeholder="title">
                                        </b-input>
                                    </div>

                                    <div class="group_btn">
                                        <b-button
                                                class="btn"
                                                type="submit"
                                        >
                                            Submit
                                        </b-button>

                                    </div>
                                </b-form>
                            </div>
                        </div>
                    </div>

                </div>

</template>
<script>
    import { CREATEDATASET_MUTATION } from '@/mutations'
    import Menu from '@/components/Menu'
    export default {
        name: 'CreateDataset',
        components:{
            Menu
        },
        data () {
            return {
                input: '',
                title: '',
                solutionTitle: '',
                type: '',
                type1: '',
                type2: '',
                type3: '',

            }
        },
        methods: {
                createDataset () {
                    this.$apollo
                        .mutate({
                            mutation: CREATEDATASET_MUTATION,
                            variables: {
                                input:{
                                    title:this.title,
                                    solutionTitle: this.solutionTitle,
                                    paramInfo:[
                                        {
                                            title: this.title,
                                            type: this.type
                                        },
                                        {
                                            title: this.title,
                                            type: this.type
                                        },
                                        {
                                            title: this.title,
                                            type: this.type
                                        },

                                    ]
                                }
                            },
                        })
                        .then((data) => {
                            console.log(data.data);
                                alert('Ура');
                        })
                        .catch(data => {
                            console.log(data);
                        })
                },
        }
    }
</script>
<style scoped>
    .ContainerMenu{
        background-color: rgba(253, 239, 221, 255);
        border-radius: 45px;
        margin-left: 16%;
        margin-top:0%;
        margin-right: 0%;
        min-height: 5%;
        text-decoration: none;
        padding-top: 0%;
        padding-bottom: 0%;
        font-weight: bold;
        white-space: nowrap;

    }
    .ContainerMenu, a{
        font-size: 0.5rem;
        color: #791c1c;
        text-decoration: none;
        text-align: center;
    }
    input{
        background-color: rgba(253, 239, 221, 255);
        color: rgb(29, 28, 26);
        outline:none;
    }
    input:focus, input:active, input:hover {
        outline:none;
        background-color: rgba(253, 239, 221, 255);
    }

    .labelForm{
        font-size: 0rem;
        color: black;
    }
    .ContainerMenu, a:active, a:hover{
        color: black;
        text-decoration: none;
        text-align: center;
    }
</style>
