package com.davidson.user;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.neo4j.ogm.annotation.GeneratedValue;
import org.neo4j.ogm.annotation.Id;
import org.neo4j.ogm.annotation.NodeEntity;

@NodeEntity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
public class User {
    @Id
    @GeneratedValue
    private Long id;
    private String pseudo;
    private String name;
    private String firstname;
    private boolean student;
    private boolean transport;
    private boolean parent;
    private boolean bourse;
    private boolean ru;
    private boolean regle;
}
