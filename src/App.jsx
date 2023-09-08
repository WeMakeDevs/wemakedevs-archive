import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import '@/styles/tailwind.css';
import 'react-loading-skeleton/dist/skeleton.css';

import CocContent from '@/content/coc';
import {
  DevopsPageContent,
  DsaPageContent,
  GitGithubPageContent,
} from '@/content/courses';
import { CoursesPageContent } from '@/content/courses/CoursesPageContent';
import OpenSourcePageContent from '@/content/courses/opensource';
import { hackathonDataList } from '@/content/Hackathons';
import { MeetupPageContent } from '@/content/Meetup';
import Delhi2023 from '@/content/Meetup/delhi-may-2023';
import { OpensourcePageContent } from '@/content/opensource';
import RoadLessTravelledContent from '@/content/roadlesstravelled';
import Supper25Content from '@/content/super25';
import WebinarPageContent, { webinar } from '@/content/Webinars/index.content';

import { Loader } from '@/components/layout';
import ScrollToTop from '@/components/ScrollToTop';

const RoadLessTravelledPage = lazy(() =>
  import('@/pages/RoadLessTravelledPage')
);

const ScholarshipsPage = lazy(() => import('@/pages/ScholarshipsPage'));
const HackathonsPage = lazy(() => import('@/pages/HackathonPage'));
const EducationalEventsPage = lazy(() =>
  import('@/pages/EducationalEventsPage')
);

const ErrorPage = lazy(() => import('@/pages/ErrorPage'));
const HashnodePage = lazy(() => import('@/pages/Hashnode'));
const HomePage = lazy(() => import('@/pages/HomePage'));
const EventsPage = lazy(() => import('@/pages/EventsPage'));
const CoursesPage = lazy(() => import('@/pages/CoursesPage'));
const SingleCoursePage = lazy(() => import('@/pages/SingleCoursePage'));
const WebinarPage = lazy(() => import('@/pages/WebinarPage'));
const IndividualWebinarPage = lazy(() => import('@/pages/IndividualWebinar'));
const PerticularhackathonPage = lazy(() =>
  import('@/pages/PerticularhackathonPage')
);
const ParticularMeetupPage = lazy(() => import('@/pages/ParticularMeetupPage'));
const Super25Page = lazy(() => import('@/pages/Super25Page'));
const CocPage = lazy(() => import('@/pages/CocPage'));
const MeetupPage = lazy(() => import('@/pages/MeetupPage'));
const OpenSourcePage = lazy(() => import('@/pages/OpenSourcePage'));
const OpenSourceCoursePage = lazy(() => import('@/pages/OpenSourceCoursePage'));

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <div>
        <Routes>
          <Route exact path='/' element={<HomePage />} />

          {/* Courses */}
          <Route
            exact
            path='/courses'
            element={<CoursesPage content={CoursesPageContent} />}
          />
          <Route
            exact
            path='/courses/dsa'
            element={<SingleCoursePage content={DsaPageContent} />}
          />
          <Route
            exact
            path='/courses/git-github'
            element={<SingleCoursePage content={GitGithubPageContent} />}
          />
          <Route
            exact
            path='/courses/devops'
            element={<SingleCoursePage content={DevopsPageContent} />}
          />
          <Route
            exact
            path='/courses/opensource'
            element={<OpenSourceCoursePage content={OpenSourcePageContent} />}
          />

          {/* Events Page */}
          <Route exact path='/events' element={<EventsPage />} />
          <Route exact path='/events/hashnode' element={<HashnodePage />} />

          {/* Webinar */}
          <Route
            exact
            path='/events/webinars'
            element={<WebinarPage content={WebinarPageContent} />}
          />
          {webinar.map((web) => (
            <Route
              key={web.img}
              exact
              path={`/events/webinars/${web.slug}`}
              element={<IndividualWebinarPage content={web.details} />}
            />
          ))}

          {/* Hackathon */}
          <Route exact path='/events/hackathons' element={<HackathonsPage />} />
          {hackathonDataList
            .filter((hack) => hack.hasContent)
            .map((hack) => (
              <Route
                key={hack.content.title}
                exact
                path={`/events/hackathons/${hack.content.slug}`}
                element={<PerticularhackathonPage content={hack.content} />}
              />
            ))}
          {/* <Route
            exact
            path={`/events/hackathons/${NapptiveHackathon.slug}`}
            element={<PerticularhackathonPage content={NapptiveHackathon} />}
          /> */}

          {/* Meetup */}
          <Route
            exact
            path='/events/meetups'
            element={<MeetupPage content={MeetupPageContent} />}
          />
          <Route
            exact
            path={`/events/meetups/${Delhi2023.slug}`}
            element={<ParticularMeetupPage content={Delhi2023} />}
          />

          {/* Open Source Page */}
          <Route
            exact
            path='/opensource'
            element={<OpenSourcePage content={OpensourcePageContent} />}
          />

          {/* Scholarships */}
          <Route
            exact
            path='/events/scholarships'
            element={<ScholarshipsPage />}
          />

          {/* Educational events */}
          <Route
            exact
            path='/events/educational'
            element={<EducationalEventsPage />}
          />

          {/* Career events */}
          <Route
            exact
            path='/events/road-less-travelled'
            element={
              <RoadLessTravelledPage content={RoadLessTravelledContent} />
            }
          />

          {/* Super 25 */}
          <Route
            exact
            path='/events/super25'
            element={<Super25Page content={Supper25Content} />}
          />

          {/* COC */}
          <Route exact path='/coc' element={<CocPage content={CocContent} />} />

          {/* Error Page */}
          <Route path='*' element={<ErrorPage />} />
        </Routes>
        <ScrollToTop />
      </div>

      <svg width='0' height='0'>
        <linearGradient id='blue-gradient' x1='100%' y1='100%' x2='0%' y2='0%'>
          <stop stopColor='#ef4444' offset='0%' />
          <stop stopColor='#8b5cf6' offset='100%' />
        </linearGradient>
      </svg>
    </Suspense>
  );
};

export default App;
