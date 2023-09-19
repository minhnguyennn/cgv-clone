export default function Menu() {
   return (
      <>
         <div className="menu">
            <ul className="menu-ul">
               <li className="menu-li">
                  <a href="">phim</a>
                  <ul className="dropdown-content">
                     <li>
                        <a href="">phim đang chiếu</a>
                     </li>
                     <li>
                        <a href="">phim sắp chiếu</a>
                     </li>
                  </ul>
               </li>
               <li className="menu-li">
                  <a href="">Rạp cgv</a>
               </li>
               <li className="menu-li">
                  <a href="">thành viên</a>
               </li>
               <li className="menu-li">
                  <a href="">cultureplex</a>
               </li>
               <li className="menu-li">
                  <a href="">tuyển dụng</a>
               </li>
            </ul>
         </div>
      </>
   );
}
