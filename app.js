const app = new Vue(
    {
        el: '#app',
        data: {
            emails: [],
            pippoArray: [1,2,3,4,5,6,7,8,9,10]
        },
        methods: {

            showEmails() {
                console.log(this.emails);
                console.log(this.pippoArray);
            }

        },
        mounted() {
            //() => {
            for (let i = 0; i < 10; i++) {

                

                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then(response => {

                        console.log(`iterazione ${i + 1}`);
                        console.log(this);

                        console.log(response);
                        console.log(response.data);
                        console.log(response.data.response);

                        console.log('_________________________________');

                        this.emails.push(response.data.response);
                    }
                )
            }
            //}
        }
    }
)