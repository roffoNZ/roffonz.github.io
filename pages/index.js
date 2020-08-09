import React, { Component } from 'react';
import { getData } from '../assets/js/gson';
import Layout from '../components/Layout';
import Table from '../assets/js/TableClass';
import Hero from '../components/Hero';
import Ally from '../components/Ally';
import Horde from '../components/Horde';
import Item from '../components/Item';

export default function Index({ gson, lastUpdate, preview }) {
  const table = {
    ally: {
      current: new Table(gson[1]),
      total: new Table(gson[0]),
    },
    horde: {
      current: new Table(gson[3]),
      total: new Table(gson[2]),
    },
  };

  return (
    <Layout>
      <Hero date={lastUpdate} />
      <section id='section-table'>
        <div className='header-bar'>
          <Item
            pic={'inv_misc_head_human_01.jpg'}
            id={5442}
            total={table.ally.total.sumTotal + table.horde.total.sumTotal}
            current={table.ally.current.sumTotal + table.horde.current.sumTotal}
          />
        </div>

        <div id='table'>
          <div id='table-ally' className='tab'>
            <Ally table={table.ally} />
          </div>
          <div id='table-horde' className='tab'>
            <Horde table={table.horde} />
          </div>
        </div>
      </section>
      <footer id='footer'>
        <span>
          Made with 🍻️ by Exa & Doyd <br />
          of the Laughing Coffin
        </span>
        <span>
          <i className='fab fa-github'></i>{' '}
          <a href='https://github.com/JollyGrin/aqwareffort'>View Source</a>
        </span>
      </footer>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const gson = await getData(process.env.URL);

  // const lastUpdate = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
  const lastUpdate = new Date().toLocaleString("en-US", {timeZone: "Australia/Sydney"});
  return {
    props: { gson, lastUpdate }, // will be passed to the page component as props
  };
}
