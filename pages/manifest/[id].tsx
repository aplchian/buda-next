import {Container} from "../index";
import App from '../../App'
import AppBar from "../../components/AppBar";
import React from "react";
import {getOrInitManifest} from "../../api/getManifest";
import {setManifest} from "../../redux/actions/manifest";
import {connect} from "react-redux";
import {curry, lensPath, reduce, set, view} from "ramda";
import Dialog from "../../components/Dialog";
import {Buda} from "../../types";

const Manifest = (props: { volume: string, dispatch: any, manifest: any }) => {
    const handleSettingsUpdate = curry((lens, value) => {
        const updatedManifest = set(lens, value, props.manifest)
        props.dispatch(setManifest(updatedManifest))
    })
    const [isFetching, setIsFetching] = React.useState(false)
    const [fetchErr, setFetchErr] = React.useState(null)
    const [selectedTab, setSelectedTab] = React.useState('manifest')

    React.useEffect(() => {
        const { volume } = props
        setFetchErr(null)
        if (!volume) {
            setIsFetching(false)
        } else {
            const getData = async () => {
                setIsFetching(true)
                try {
                    const { manifest } = await getOrInitManifest(volume, {
                        uiLanguage: 'en',
                    })
                    setIsFetching(false)
                    props.dispatch(setManifest(manifest))
                } catch (err) {
                    setIsFetching(false)
                    setFetchErr(err.message)
                }
            }
            getData()
        }
    }, [])


    const imageListLens = lensPath(['view', 'view1', 'imagelist'])
    const imageList = (view(imageListLens, props.manifest) as Buda.Image[]) || []
    const sectionInUseCount = (sectionId: string) => {
        return reduce(
            (acc: number, val: Buda.Image) => {
                return val.sectionId === sectionId ? ++acc : acc
            },
            0,
            imageList
        )
    }
    return <div>
        <AppBar manifest={props.manifest} handleSettingsUpdate={handleSettingsUpdate}/>
        <Container>
            <SectionHeadings selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
            <main>
                <div className="max-w-7xl mx-auto py-6">
                    {selectedTab === 'manifest' && <App volume={props.volume} />}
                    {selectedTab === 'settings' && <Dialog
                        appData={props.manifest.appData}
                        sectionInUseCount={sectionInUseCount}
                        // open={settingsDialogOpen}
                        // handleClose={() => setSettingsDialog(false)}
                        manifest={props.manifest}
                        handleSettingsUpdate={handleSettingsUpdate}
                    />}


                </div>
            </main>

        </Container>
    </div>
}

export async function getServerSideProps(context: { query: { id: string; }; }) {
    return {
        props: {
            volume: context.query.id
        },
    }
}

const mapStateToProps = function(state: any) {
    return {
        manifest: state.manifest,
    }
}

export default connect(mapStateToProps)(Manifest)



const SectionHeadings = (props: { selectedTab: string, setSelectedTab: (arg1: string) => void }) => {
    const selectedStyling = "black text-black whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"
    const notSelectedStyling = "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"
    return <div className="pb-5 border-b border-gray-200 sm:pb-0">
        {/*<h3 className="text-lg leading-6 font-medium text-gray-900">*/}
        {/*    Candidates*/}
        {/*</h3>*/}
        <div className="mt-3 sm:mt-4">
            {/* Dropdown menu on small screens */}
            <div className="sm:hidden">
                <label htmlFor="current-tab" className="sr-only">Select a tab</label>
                <select id="current-tab" name="current-tab" className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:black focus:black sm:text-sm rounded-md">
                    <option selected>Bdr:c42d</option>
                    <option>Settings</option>
                    {/*<option>Phone Screening</option>*/}
                    {/*<option selected>Interview</option>*/}
                    {/*<option>Offer</option>*/}
                    {/*<option>Hired</option>*/}
                </select>
            </div>
            {/* Tabs at small breakpoint and up */}
            <div className="hidden sm:block">
                <nav className="-mb-px flex space-x-8">
                    {/*/!* Current: "black text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" *!/*/}
                    {/*<a href="#" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm">*/}
                    {/*    Applied*/}
                    {/*</a>*/}
                    {/*<a href="#" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm">*/}
                    {/*    Phone Screening*/}
                    {/*</a>*/}
                    <span onClick={() => props.setSelectedTab('manifest')} className={props.selectedTab === 'manifest' ? selectedStyling : notSelectedStyling} aria-current="page">
                        Bdr:c42d
                    </span>
                    <span onClick={() => props.setSelectedTab('settings')}  className={props.selectedTab === 'settings' ? selectedStyling : notSelectedStyling}>
                        Settings
                    </span>
                    {/*<a href="#" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm">*/}
                    {/*    Hired*/}
                    {/*</a>*/}
                </nav>
            </div>
        </div>
    </div>

}