function TipsCard({ icon, title, text }) {

  return (

<div className="tips-card">

<div className="tips-icon">

{icon}

</div>

<h3>{title}</h3>

<p>{text}</p>

</div>

  );
}

export default TipsCard;