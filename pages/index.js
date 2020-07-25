import React, { Component } from 'react';
import { getData } from '../assets/js/gson';
import Layout from '../components/Layout';
import Table from '../assets/js/TableClass';
import Hero from '../components/Hero';

export default function Index({ gson, preview }) {
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
      <Hero />
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const gson = await getData(process.env.URL);

  return {
    props: { gson }, // will be passed to the page component as props
  };
}