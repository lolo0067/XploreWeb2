function commentaire()
{
	//Récuperation du n° de la demande d'examen :
   var numDem = '<<DEMAND_EM_NUMDEM>>';

   //Rédaction de la requete SQL, avec n° de demande dynamique
   var requete = "select dbms_lob.substr(EM_COMM_1, dbms_lob.getlength(EM_COMM_1), 1) from H_DEMAND where EM_NUMDEM='" + numDem + "'";

   //Récupération du contenu du champ "commentaires" via la requete SQL ainsi redigee
   var comm = CsharplibExecuteSQL(requete);

   return comm;

}