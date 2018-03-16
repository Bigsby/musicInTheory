import { Component, Input, OnInit } from '@angular/core';

import { DataService } from "../../data.service";
import { Topic } from "../../models";

@Component({
    templateUrl: "./index.component.html",
    styleUrls: [
        "index.component.scss"
    ]
})
export class IndexComponent implements OnInit{
    topics: Topic[];
    constructor(private data: DataService){
    }

    ngOnInit(): void {
        this.data.getTopics().then(result => this.topics = result);
    }
}

@Component({
    templateUrl: "./index-topic.component.html",
    selector: "topic"
})
export class IndexTopic{
    @Input()topic: Topic;
}