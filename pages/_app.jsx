import { DokzProvider, GithubLink, ColorModeSwitch } from 'dokz'
import React, { Fragment } from 'react'
import Head from 'next/head'
import { Image } from "@chakra-ui/core";

export default function App(props) {
    const { Component, pageProps } = props
    console.log(Component)
    return (
        <Fragment>
            <Head>
                <link
                    href='https://fonts.googleapis.com/css?family=Fira+Code'
                    rel='stylesheet'
                    key='google-font-Fira'
                />
            </Head>
            <DokzProvider
                headerLogo={[
                    <Image src="/SodaFavico64.svg" key="0"/>
                ]}
                headerItems={[
                    <GithubLink
                        key='1'
                        url='https://github.com/remorses/dokz'
                    />,
                    <ColorModeSwitch key='2' />,
                ]}
                sidebarOrdering={{
                    'index.mdx': 1,
                    Documents_Group: {
                        'another.mdx': true,
                    },
                } }
            >
                <Component {...pageProps} />
            </DokzProvider>
        </Fragment>
    )
}
