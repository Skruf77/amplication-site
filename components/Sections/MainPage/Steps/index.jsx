import Image from 'next/image';
import Link from 'next/link';
import DataModelsIcon from '../../../../public/images/steps/data-models.svg';
import RolesIcon from '../../../../public/images/steps/roles.svg';
import SyncWithGithubIcon from '../../../../public/images/steps/sync_with_github.svg';
import AdminUiIcon from '../../../../public/images/steps/admin-ui.svg';
import ConnectIcon from '../../../../public/images/steps/connect.png';
import {useState} from 'react';

const Steps = () => {
  const [activeTab, setActiveTab] = useState('data-models');
  const [fadingState, setFadingState] = useState(true);
  const animationDelay = 100;

  const tabHandler = function (event, value) {
    event.preventDefault();

    setFadingState(false);
    setActiveTab(value);
    setTimeout(fading, animationDelay);
  };

  const fading = function () {
    setFadingState(true);
  };

  return (
    <>
      <section className="page-steps">
        <div className="w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop">
          <div className="row feature d-flex justify-content-between align-items-center !my-12">
            <h2 className="roadmap-heading text-center !mb-12 w-full">
              How Amplication backend development platform works?
            </h2>
            <div className="col-sm-12 col-md-6 pr-3">
              <div className="bracket-box">
                <span className="font-dmmono">Design</span> models and roles
              </div>
              <div className="feature-description text-white text-base laptop:text-lg !leading-normal">
                Define data entities and role-based access through
                Amplication&apos;s UI or CLI, and Amplication will auto-generate
                your database, an Admin UI, and API.
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <ul
                className="nav nav-tabs feature-images-tabs d-none"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <Link href={'#data-models'} passHref={true}>
                    <a
                      className={`nav-link ${
                        activeTab === 'data-models' ? 'active' : ''
                      }`}
                      onClick={e => {
                        tabHandler(e, 'data-models');
                      }}
                      aria-controls="data-models"
                      aria-selected="true"
                    >
                      Data models
                    </a>
                  </Link>
                </li>
                <li className="nav-item" role="presentation">
                  <Link href={'#roles'} passHref={true}>
                    <a
                      className={`nav-link ${
                        activeTab === 'roles' ? 'active' : ''
                      }`}
                      onClick={e => {
                        tabHandler(e, 'roles');
                      }}
                      aria-controls="roles"
                      aria-selected="false"
                    >
                      Roles
                    </a>
                  </Link>
                </li>
              </ul>
              <div className="tab-content">
                <div
                  className={`tab-pane fade ${
                    activeTab === 'data-models' ? 'active' : ''
                  } ${
                    fadingState && activeTab === 'data-models' ? 'show' : ''
                  }`}
                  id="data-models"
                  role="tabpanel"
                  aria-labelledby="data-models-tab"
                >
                  <Image src={DataModelsIcon} alt={'data model design'} />
                </div>
                <div
                  className={`tab-pane fade ${
                    activeTab === 'roles' ? 'active' : ''
                  } ${fadingState && activeTab === 'roles' ? 'show' : ''}`}
                  id="roles"
                  role="tabpanel"
                  aria-labelledby="roles-tab"
                >
                  <Image src={RolesIcon} alt={'assign roles'} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-steps !bg-light-blue">
        <div className="w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop">
          <div className="row feature d-flex justify-content-between align-items-center !my-12">
            <div className="col-sm-12 col-md-6 pr-3">
              <Image src={SyncWithGithubIcon} alt={'github sync'} />
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="bracket-box">
                <span className="font-dmmono">Sync</span> your app with GitHub
              </div>
              <div className="feature-description text-white text-base laptop:text-lg !leading-normal">
                Amplication syncs your app code into Node.js format to your
                GitHub repository so you can keep developing and custom code
                your app using your favorite IDE and the skills you have already
                mastered.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-steps">
        <div className="w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop">
          <div className="row feature d-flex justify-content-between align-items-center !my-12">
            <div className="col-sm-12 col-md-6 pr-3 pr-md-3">
              <div className="bracket-box">
                <span className="font-dmmono">Access</span> your Node.js app
              </div>
              <div className="feature-description text-white text-base laptop:text-lg !leading-normal">
                Our auto-generated admin UI based on your data model schema
                enables you to access your data with ease.
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <Image src={AdminUiIcon} alt={'admin ui'} />
            </div>
          </div>
        </div>
      </section>

      <section className="page-steps !bg-light-blue">
        <div className="w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop">
          <div className="row feature d-flex justify-content-between align-items-center !my-12">
            <div className="col-sm-12 col-md-6 pr-3">
              <Image src={ConnectIcon} alt={'rest api'} />
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="bracket-box">
                <span className="font-dmmono">Connect</span> your code using
                REST or GraphQL
              </div>
              <div className="feature-description text-white text-base laptop:text-lg !leading-normal">
                your code using REST or GraphQL
                <br />
                Start working with your API from any REST or GraphQL client
                (React, Angular, Vue, Flutter, iOS, Android, Go, Node.js, Python
                and more).
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Steps;
