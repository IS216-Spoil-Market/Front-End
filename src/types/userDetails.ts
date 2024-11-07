export interface ReviewItem {
    _id: string
    rating: number;
    review_of_user: string;
    reviewee_id: UserDetails;
    reviewer_id: UserDetails;
    createdAt: string;
}

export interface UserDetails {
    id: string;
    email: string;
    name: string;
    picture: string;
    about: string;
    skills_interested: string[];
    my_skills: string[];
    reviews: ReviewItem[];
}
