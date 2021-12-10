
$('#contacts').DataTable({
    language: { url: 'js/i18n/dataTables.french.json' },
    ajax: 'JSON/contacts2.json',
     
    columns:

        [
            { data: 'identifiant', orderable:false, searchable:false },
            { data: 'nom' },
            { data: 'prenom' },
            { data: 'codepostal' },
            { data: 'embauche'},
            { data: 'ville' },
            
           
            
        ]

})

                /**
                    null, render:function(data){
                        let t = data.embauche.split('-');
                        let dt = t[2] +'/'+t[1]+'/'+t[0];  
                        return dt;
                */
           