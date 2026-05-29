const Testimonials = () => {

  const reviews = [

    {
      id:1,
      name:"Rahul Sharma",
      role:"Frontend Developer",
      image:"https://randomuser.me/api/portraits/men/32.jpg",
      text:"BlogHub has completely changed the way I read articles. The design is clean, responsive and the user experience feels premium."
    },

    {
      id:2,
      name:"Shruti Suman",
      role:"UI Designer",
      image:"https://randomuser.me/api/portraits/women/44.jpg",
      text:"I love the modern design and smooth animations. Everything feels fast and engaging. One of the best blog interfaces."
    },

    {
      id:3,
      name:"Aman Verma",
      role:"Content Creator",
      image:"https://randomuser.me/api/portraits/men/75.jpg",
      text:"Amazing experience. Reading blogs here feels effortless. The layout and testimonials section look very professional."
    },

    {
      id:4,
      name:"Priya Singh",
      role:"Student",
      image:"https://randomuser.me/api/portraits/women/68.jpg",
      text:"The website looks beautiful and easy to navigate. I enjoy reading tech and education blogs daily."
    },

    {
      id:5,
      name:"Rohit Kumar",
      role:"MERN Developer",
      image:"https://randomuser.me/api/portraits/men/22.jpg",
      text:"Glass UI, modern structure and smooth responsiveness. This project really feels portfolio ready."
    },

    {
      id:6,
      name:"Neha Gupta",
      role:"Blogger",
      image:"https://randomuser.me/api/portraits/women/25.jpg",
      text:"Writing and reading blogs here feels amazing. The interface is elegant and highly interactive."
    }

  ]


  return (

<section
id="testimonials"
className="
py-24
px-6
md:px-16
bg-gradient-to-b
from-black
via-slate-900
to-black
">

<div className="text-center">

<p className="text-blue-400 tracking-widest">

TESTIMONIALS

</p>

<h1 className="
text-4xl
md:text-6xl
font-bold
text-white
mt-3
">

What People Say

</h1>

<p className="
text-gray-400
mt-5
max-w-2xl
mx-auto
">

Real reviews from users who enjoy reading,
sharing and exploring blogs on BlogHub.

</p>

</div>



<div className="
grid
md:grid-cols-3
gap-8
mt-16
">

{

reviews.map((item)=>(

<div
key={item.id}

className="
bg-white/10
backdrop-blur-lg
border border-white/10
rounded-3xl
p-7
shadow-xl
hover:scale-105
duration-500
group
">

<div className="
flex
items-center
gap-4
">

<img
src={item.image}
alt=""
className="
w-16
h-16
rounded-full
border-2
border-blue-500
object-cover
"
/>


<div>

<h2 className="
text-white
font-bold
text-xl
">

{item.name}

</h2>

<p className="
text-gray-400
text-sm
">

{item.role}

</p>

</div>

</div>


<div className="
flex
mt-5
text-yellow-400
text-xl
">

★★★★★

</div>


<p className="
text-gray-300
leading-7
mt-5
">

"{item.text}"

</p>

</div>

))

}

</div>

</section>

)

}

export default Testimonials;