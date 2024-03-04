/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  ContentWrapper,
  Navbar,
  Label,
  LoadMore,
  Keyword,
  ResultsWrapper,
} from "./styles";
import Card from "../../components/Card/Card";
import Modal from "../../components/Modal/Modal";

import ngmusic from "../../assets/ngmusic.svg";
import menuIcon from "../../assets/menuIcon.svg";
import searchIcon from "../../assets/searchIcon.svg";

import { ItunesType, ItunesDataType } from "../../types/itunes.type";
import axios from "../../services/axios";

const Search = () => {
  const [showModal, setShowModal] = useState<boolean>(false)
  const [showLoadMore, setShowLoadMore] = useState<boolean>(true)
  const [resultDataMusic, setResultDataMusic] = useState<ItunesType | undefined>(undefined)
  const [showed, setShowed] = useState<ItunesDataType[] | []>([])
  const [page, setPage] = useState<number>(0)

  const { keyword } = useParams()
  const navigate = useNavigate()
  const loadPerPage = parseInt(process.env.REACT_APP_LOAD_PAGE || "4")

  useEffect(() => {
    if (keyword) onSearchMusic(keyword);
    setShowModal(false);
  }, [keyword]);

  const onSearchMusic = (value: string) => {
    axios.get<ItunesType>(`/search?term=${value}`)
      .then(({ data }) => {
        setResultDataMusic(data);
      })
      .catch((e: Error) => {
        console.error(e);
      });
  };

  useEffect(() => {
    if (resultDataMusic && showed.length >= resultDataMusic?.results.length) {
      setShowLoadMore(false);
    } else {
      setShowLoadMore(true);
    }
  }, [showed]);

  useEffect(() => {
    setPage(0);
    if (resultDataMusic && resultDataMusic?.results) {
      isUpdateShow(true);
    } 
  }, [resultDataMusic]);

  const isUpdateShow = (isinit?: boolean) => {
    if (resultDataMusic && resultDataMusic.results)
      if (isinit)
        setShowed(
          resultDataMusic.results.slice(page * loadPerPage, page * loadPerPage + loadPerPage)
        );
      else
        setShowed((old: ItunesDataType[]) =>
          old.concat(
            resultDataMusic.results.slice(page * loadPerPage, page * loadPerPage + loadPerPage)
          )
        );
  };

  const onHandleLoadMore = () => {
    setPage((old) => old + 1);
    isUpdateShow();
  };

  return (
    <div style={{minHeight: '100vh'}}>
      {showModal && <Modal onClose={() => setShowModal(false)} />}
      <Navbar>
        <button onClick={() => navigate("/")}>
          <img src={menuIcon} alt="menuIcon" />
        </button>
        <img src={ngmusic} alt="ngmusic" />
        <button onClick={() => setShowModal(true)}>
          <img src={searchIcon} alt="searchIcon" />
        </button>
      </Navbar>
      <ContentWrapper>
        <div style={{textAlign: 'center'}}>
          <Label>Search result for :</Label>
          <Keyword>{keyword || ''}</Keyword>
        </div>
        <ResultsWrapper>
          {showed &&
            showed?.map((data: ItunesDataType) => (
              <Card data={data} key={`${data.trackId}${Math.random()}`} />
            ))}
          {showed?.length > 0 && showLoadMore ? (
            <LoadMore onClick={onHandleLoadMore}>Load More</LoadMore>
          ) : (
            <div style={{textAlign: 'center'}}>Data not found!</div>
          )}
        </ResultsWrapper>
      </ContentWrapper>
    </div>
  );
}

export default Search;