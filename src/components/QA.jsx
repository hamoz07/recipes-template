
import QAItem from './QAItem'
import Headline from './headline'

const QA  = () => {
    return(


        <div className={"more-section"}>
            {/* <div className="container"> */}

          <Headline headline={"Frequently Asked Questions"} pitem={false}/>
          <div className='QA'>

          <QAItem h3="Is Foodera Bread really baked fresh each day?" p="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language."/>
          <QAItem h3="Do you bake breads containing animal fats or products?" p="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language."/>
          <QAItem h3="Can I order your products online?" p="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language."/>
          <QAItem h3="When are you opening a shop near me?" p="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language."/>
            </div>
          {/* </div> */}
        </div>
    )
}

export default QA