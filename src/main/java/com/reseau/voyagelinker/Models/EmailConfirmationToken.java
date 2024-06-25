package com.reseau.voyagelinker.Models;


import lombok.Data;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.ReadOnlyProperty;
import org.springframework.data.cassandra.core.mapping.CassandraType;
import org.springframework.data.cassandra.core.mapping.PrimaryKey;
import org.springframework.data.cassandra.core.mapping.Table;

import java.time.LocalDateTime;
import java.util.UUID;

@Data
@Table
public class EmailConfirmationToken {
    @PrimaryKey
    @CassandraType(type = CassandraType.Name.UUID)
    private UUID Id;

    private String token;
    @CreatedDate
    @ReadOnlyProperty
    private LocalDateTime timeStamp;

    private UUID user;

    public EmailConfirmationToken(String token, LocalDateTime timeStamp, UUID user) {
        this.token = token;
        this.timeStamp = timeStamp;
        this.user = user;
    }

    public EmailConfirmationToken() {
    }

    @Override
    public String toString() {
        return "EmailConfirmationToken{" +
                "Id=" + Id +
                ", token='" + token + '\'' +
                ", timeStamp=" + timeStamp +
                ", user=" + user +
                '}';
    }
}
