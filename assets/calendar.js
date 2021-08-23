Vue.component('calendar', {
    template: `
    <div>
        <iframe v-bind:src="link" style="border-width:0" width="100%" height="700px" frameborder="0" scrolling="no"></iframe>
    </div>
    `,
    data: function() {
        return {
            link: '',
        }
    },
    mounted: function() {
        // Future person: These hex codes are specific and chosen by Google
        let all_cal = [
            { /* IEEE Calendar */ color: '2952A3', src: 'd5lo1ojucvmelsk9a54kndq1g8@group.calendar.google.com'},
            { /* Computer Society */ color: '1B887A', src: 'mmi9atsgvigdbhnsf783vtlcv8@group.calendar.google.com'},
            { /* EMBS */ color: '5229A3', src: 'embspurdue@gmail.com'},
            { /* MTT-S */ color: '0D7813', src: 'edv88gqt4b1v7fs6b6gi2bd8f8@group.calendar.google.com'},
            { /* PARTIEEE */ color: 'A32929', src: 'h8nk778rgq4idlspuf4uevfs84@group.calendar.google.com'},
            { /* Racing */ color: '6B3304', src: 'cptv9quqhvbder77uuq0n7nsi8@group.calendar.google.com'},
            { /* ROV 2020-21 */ color: 'AB8B00', src: 'f9a3kg942is76p8kaf90n643cc@group.calendar.google.com'},
            { /* ROV 2021-22 */ color: 'AB8B00', src: 'bu5n2uj8dnmc46thuh0tvblkpc@group.calendar.google.com'},
            { /* Software Saturdays */ color: '333333', src: 'd606i7l0ahpasvr7gl3abatfi0@group.calendar.google.com'},
            { /* Workspace Res */ color: '865A5A', src: 'vuk1tocl97vaod7ej5de08e9dc@group.calendar.google.com'},
        ]

        // what the fuck google
        let url = '';
        all_cal.forEach((cal) => {
            url += `src=${cal.src}&color=%23${cal.color}&`
        });
        // Also, on Firefox this generates a shitton of CSP warnings, it is normal and expected
        this.link = `https://calendar.google.com/calendar/embed?mode=WEEK&showTitle=0&showPrint=0&height=700&wkst=1&bgcolor=%23F5F5F5&${url}ctz=America/New_York;`;
    }
});


const vm = new Vue({
    el: '#app',
    data: {

    },
    methods: {
    
    }
});