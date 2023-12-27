
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreateHotel {
    address: string;
}

export interface Hotel {
    id: string;
    address?: Nullable<string>;
    review?: Nullable<Review>;
}

export interface Review {
    id?: Nullable<string>;
}

export interface IQuery {
    hotels(): Hotel[] | Promise<Hotel[]>;
    hotel(id: string): Nullable<Hotel> | Promise<Nullable<Hotel>>;
}

export interface IMutation {
    createHotel(input?: Nullable<CreateHotel>): Hotel | Promise<Hotel>;
}

type Nullable<T> = T | null;
