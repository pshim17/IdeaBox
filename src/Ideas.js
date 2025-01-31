import Card from './Card';
import './Ideas.css'

function Ideas({ ideas }){
  const ideaCards = ideas.map((idea) => {
    console.log(idea)
    return (
      <Card
        title={idea.title}
        description={idea.description}
        id={idea.id}
        key={idea.id}
      />
    )
  })

  return (
    <div className='ideas-container'>
      { ideaCards }
    </div>
  )
}

export default Ideas;