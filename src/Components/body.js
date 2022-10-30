export default function Body(){
    return(
        <div class='main'>
            <div className='profile'>
                <img id="profile_img" src='https://cdn.pixabay.com/photo/2013/07/13/13/32/demon-161049__340.png' />
                <p id='twitter'><span><i class="fa-brands fa-twitter"></i></span>@demonflown</p>
                <p id="slack"><span><i class="fa-brands fa-slack"></i></span>@Emmanuel Ibu</p>
            </div>
            <ul>
                <li><a href="https://twitter.com/demonflown">Twitter Link</a></li>
                <li id="books"><a href="https://training.zuri.team/">Zuri Team</a></li>
                <li><a href="#">Zuri Books</a></li>
                <li id="book__python"><a href="https://books.zuri.team/python-for-beginners?ref_id=Emmanuel Ibu">Python Books</a></li>
                <li id="pitch"><a href="https://background.zuri.team">Background Check for coders</a></li>
                <li id='book__design'><a href="https://books.zuri.team/design-rules">Design Books</a></li>
            </ul>
        </div>
    )
}