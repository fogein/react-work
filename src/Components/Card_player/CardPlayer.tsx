import React from 'react'
import create from '../../assets/create.svg'
import del from '../../assets/delete.svg'
import por2 from '../../assets/POR2.png'

export const CardPlayer: React.FC = () => {
  return (
    <>
      <section className="container__cardPlayer">
          {/* top */}
          <div className="top__cardPlayer">
              <div className="about__cardPlayer">
                <span>Teams <span>/</span> Denver Nuggets</span>
              </div>
              <div className="edit__cardPlayer">
                <button><img src={create} alt="create" /></button>
                <button><img src={del} alt="delete"  /></button>
              </div>
          </div>
          {/* top end */}

          {/* main */}

          <div className="main__cardPlayer">
            <div className="logo__cardPlayer">
              <img src={por2} alt="logo" />
            </div>

            <div className="description__cardPlayer">

              <div className="name__cardPlayer">
                    <h2>Greg Whittington <span>#22</span></h2>
                </div>
                <div className="abilitys">
                <div className="Position__cardPlayer">
                <h3>Position</h3>
                <span className='text'>Forward</span>
              </div>

              <div className="Height__cardPlayer">
                <h3>Height</h3>
                <span className='text'>206 cm</span>
              </div>

              <div className="Age__cardPlayer">
                <h3>Age</h3>
                <span className='text'>27</span>
              </div>
           
           <div className="Team__cardPlayer">
               <h3>Team</h3>
               <span className='text'>Denver Nuggets</span>
             </div>

             <div className="Weight__cardPlayer">
               <h3>Weight</h3>
               <span className='text'>95 kg</span>
             </div>
                </div>
            </div>
          </div>
          {/* main end */}
        </section>
    </>
  )
}
