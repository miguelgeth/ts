enum ROLES {// CON ESTOE PODMEOS DEFINIR UN SET DE OPTIONS PARA TODOS
  ADMIN = 'admin',// le podemos pasar number
  SELLER = 'seller',
  CUSTOMER = 'customer',

}
type User = {
  username: string,
  role: ROLES;// LE PASAMOS EL ENUM
}

const miguelUser: User = {
  username: 'miguel',
  role: ROLES.ADMIN // le asignamos el rol(value que debe asignar)
}

//VAMOS A VER COMO ALGUNAS LIB LO USAN PARA DOCUMENTAR SUS OPTIONS
//GOOGLE MAPS USA ENUMS, VAMOS A USAR CAPACITOR ES UNA LIB PARA HACER APP MULTI-PLATFORM
